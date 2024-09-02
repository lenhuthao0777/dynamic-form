'use client';

import React from 'react';
import { Button } from '../ui/button';
import Element from './element';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { FormControl, FormField, FormItem, FormMessage } from '../ui/form';
// import { Input } from '../ui/input';
import {  UseFormContextCreate } from './use-forms';
const FormCreate = () => {
  const { handleSubmit } = UseFormContextCreate();

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });
  return (
    <div className='p-4 border border-input rounded-md shadow-md m-5'>
      <form onSubmit={onSubmit}>
        <Element />

        <div className='p-4'>
          <Button type='submit'>Save</Button>
        </div>
      </form>
    </div>
  );
};

export default FormCreate;
