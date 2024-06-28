import { ReactElement, ReactNode } from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card';
import { OneBlock, NodeOneBlock, NodeTwoBlocks } from './layout';
import { NodeButton } from './button';
import { NodeCard } from './card';
import { Upload } from '../ui/upload';
import { NodeUpload } from './upload';
import { Element } from '@craftjs/core';

export type Components = {
  name: string;
  items: {
    name: string;
    props?: {
      variant?:
        | 'link'
        | 'default'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | null
        | undefined;
      className?: string;
      children?: ReactNode | string;
    };
    node: ReactElement;
    demo?: ReactNode;
  }[];
};

export const componentsMap: Components[] = [
  {
    name: 'Buttons',
    items: [
      {
        name: 'Default',
        demo: <Button>Default</Button>,
        node: <NodeButton>Default</NodeButton>,
      },
      {
        name: 'Outline',
        props: { variant: 'outline', children: 'Outline' },
        demo: <Button variant={'outline'}>Outline</Button>,
        node: <NodeButton variant={'outline'}>Outline</NodeButton>,
      },
      {
        name: 'Destructive',
        props: { variant: 'destructive', children: 'Destructive' },
        demo: <Button variant={'destructive'}>Destructive</Button>,
        node: <NodeButton variant={'destructive'}>Destructive</NodeButton>,
      },
    ],
  },
  {
    name: 'Cards',
    items: [
      {
        name: 'Default',
        demo: (
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>Empty Container</CardContent>
            <CardFooter>
              <Button className="w-full">Footer button</Button>
            </CardFooter>
          </Card>
        ),
        node: <NodeCard></NodeCard>,
      },
    ],
  },
  {
    name: 'Layout',
    items: [
      {
        name: 'One Block',
        demo: (
          <OneBlock className="text-center italic p-4 bg-yellow-100 outline-dashed outline-amber-400">
            One Block
          </OneBlock>
        ),
        node: (
          <Element
            canvas
            is={NodeOneBlock as typeof NodeOneBlock & string}
            id="one-block"
          />
        ),
      },
      {
        name: 'Two Blocks',
        demo: (
          <OneBlock className="text-center italic p-4 bg-yellow-100 outline-dashed outline-amber-400 flex flex-row">
            <OneBlock className="text-center italic bg-yellow-100 outline-dashed outline-amber-400">
              First Block
            </OneBlock>
            <OneBlock className="text-center italic bg-yellow-100 outline-dashed outline-amber-400">
              Second Block
            </OneBlock>
          </OneBlock>
        ),
        node: <NodeTwoBlocks></NodeTwoBlocks>,
      },
    ],
  },
    {
        name: 'Picture',
        items: [
            {
                name: 'Upload Image',
                demo: <Upload>Upload Image</Upload>,
                node: <NodeUpload>Upload Image</NodeUpload>,
            },
            {
                name: 'Image URL',
                demo: (
                    <div>
                        <input type="text" placeholder="Enter image URL" />
                        <Button>Insert Image</Button>
                    </div>
                ),
                node: (
                    <div>
                        <input type="text" placeholder="Enter image URL" />
                        <NodeButton>Insert Image</NodeButton>
                    </div>
                ),
            },
        ],
    }
];
