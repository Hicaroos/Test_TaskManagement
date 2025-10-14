import React from 'react';
import { Card } from './Card';

type ContentCardProps = {
  title: string;
  value: string;
description: string;  
}
export function ContentCard({description, title, value}: ContentCardProps) {
  
  return (
        <Card>
            <div>
                <h3 className="text-sm text-gray-400">{title}</h3>
                <p className={'mt-2 text-4xl font-bold text-sky-500'}>{value}</p>
            </div>
            <p className="text-xs text-gray-500 mt-4">{description}</p>
        </Card>
  );
}