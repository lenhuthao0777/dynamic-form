import FormCreate from '@/components/interfaces/form';
import { FormCreateContext } from '@/components/interfaces/use-forms';

export default function Home() {
  return (
    <FormCreateContext>
      <FormCreate />
    </FormCreateContext>
  );
}
