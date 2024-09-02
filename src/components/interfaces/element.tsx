'use client';

import React, { FC } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useFormFields } from './use-form-field';
import { UseFormContextCreate } from './use-forms';

type PropsType = {
  prefix?: string;
};

const Element: FC<PropsType> = ({ prefix = '' }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = UseFormContextCreate();

  const { fields, nameInputPath, handleAddNew, handleRemove } =
    useFormFields(prefix);

  const formData = watch();

  console.log(formData);

  return (
    <div>
      <div className='flex items-center space-x-2'>
        <div>
          <Input
            {...register(nameInputPath)}
            placeholder='Enter value'
            className='w-44'
          />

          <p className='text-xs font-semibold text-rose-500 mt-1'>
            {errors['value']?.message}
          </p>
        </div>

        <Button
          type='button'
          size='sm'
          variant='outline'
          onClick={handleAddNew}
        >
          ADD
        </Button>
      </div>

      {fields.length
        ? fields.map((item, index) => (
            <div className='flex items-center space-x-2 ml-10' key={item.id}>
              <Button
                type='button'
                size='sm'
                variant='outline'
                onClick={() => handleRemove(index as number)}
              >
                DEL
              </Button>
              <Element prefix={`${prefix}groups.${index}.`} />
            </div>
          ))
        : null}
    </div>
  );
};

export default Element;
