'use client';

import { Widget } from '@typeform/embed-react';

interface TypeformEmbedProps {
  id: string;
}

const TypeformEmbed: React.FC<TypeformEmbedProps> = ({ id }) => {
  return (
    <Widget
      id={id}
      style={{ width: '90%', height: '20rem' }}
      className="my-form"
    />
  );
};

export default TypeformEmbed;