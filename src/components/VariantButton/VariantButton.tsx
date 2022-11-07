import React, { FC } from 'react';
import tw from "twin.macro"

export interface VariantButtonProps {
  /**
   *  button label text
   */
  text: string;

}

const Button = tw.button`btn btn-primary`
/**
 * Button with variants
 */
export const VariantButton: FC<VariantButtonProps> = ({
  text,
}) => {
  return (
    <Button>
      <div data-testid="label" style={{ padding: '5px 10px' }}>
        {text}
      </div>
    </Button>
  );
};
