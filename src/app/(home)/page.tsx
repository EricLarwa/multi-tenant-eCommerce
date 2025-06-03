
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

export default function home() {
  return (
    <div className="p-4">
      <div className='flex flex-col gap-y-4 items-center'>
        <Button variant="elevated">Button</Button>
        <Input placeholder='Input' />
        <Progress value={50} />
        <Textarea placeholder='Textarea' />
        <Checkbox />
      </div>
    </div>
  )
}