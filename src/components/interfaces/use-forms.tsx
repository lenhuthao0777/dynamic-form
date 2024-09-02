'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { z } from 'zod';

export const value = z.string().min(2);

const formSchema = z.object({
  value: z.string({ message: 'Value can not be black!' }).min(1),
  groups: z.array(
    z.object({
      value: z.string(),
      groups: z.array(z.object({ value })),
    })
  ),
});

export type FormSchema = z.infer<typeof formSchema>;

export const FormCreateContext = ({ children }: { children: ReactNode }) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  return <FormProvider {...form}>{children}</FormProvider>;
};

export const UseFormContextCreate = () => useFormContext<FormSchema>();
