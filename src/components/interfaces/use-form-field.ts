import { useFieldArray } from 'react-hook-form';

import { UseFormContextCreate } from './use-forms';

export const useFormFields = (prefix?: string) => {
  const { control } = UseFormContextCreate();

  const nameInputPath = `${prefix}value` as 'value';
  const arrName = `${prefix}groups` as 'groups';

  const { fields, append, remove } = useFieldArray({
    control,
    name: arrName,
    rules: {
      required: 'please add at least one skill',
    },
  });

  const handleAddNew = () => {
    append({
      value: '',
      groups: [],
    });
  };

  const handleRemove = (index: number) => {
    remove(index);
  };
  return {
    fields,
    nameInputPath,
    arrName,
    handleRemove,
    handleAddNew,
  };
};
