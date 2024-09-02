import React, { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

type PropsType = {
  prefix?: string | number;
  form: any;
  onAddNew?: () => void;
  onRemove?: (id: any) => void;
};

const RecursiveChildrenElement: FC<PropsType> = ({
  form,
  prefix = '',
  onAddNew,
  onRemove,
}) => {
  return (
    <>
      <div className='flex items-center space-x-2'>
        <FormField
          control={form.control}
          name={`${prefix}.condition.field`}
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className='w-44'>
                    <SelectValue placeholder='Select field' />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <SelectItem value='email'>Email</SelectItem>
                  <SelectItem value='password'>Password</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`${prefix}.condition.operator`}
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Select a operator' />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <SelectItem value='1'> {`>=`} </SelectItem>
                  <SelectItem value='2'>=</SelectItem>
                  <SelectItem value='3'> {`<=`} </SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`${prefix}.condition.value`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input onChange={field.onChange} placeholder='Enter value' />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`${prefix}.isAnd`}
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Select a condition' />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <SelectItem value='and'>AND</SelectItem>
                  <SelectItem value='or'>OR</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='button' variant='outline' onClick={onAddNew}>
          ADD
        </Button>

        <Button type='button' variant='outline' onClick={onRemove}>
          DEL
        </Button>
      </div>
    </>
  );
};

export default RecursiveChildrenElement;
