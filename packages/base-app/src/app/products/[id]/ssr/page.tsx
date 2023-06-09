import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';

import { FlexCentered, Wrapper } from '@/components/core';
import { SSRProduct } from '@/components/template';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
};

const Product = ({ params }: { params: { id: string } }) => {
  return (
    <Wrapper>
      <FlexCentered className="gap-2">
        <Link href="/">
          <MdArrowBack size={24} />
        </Link>
        <h4 className="my-8 text-center">Product ID: {params.id}</h4>
      </FlexCentered>

      {/* @ts-expect-error Server Component */}
      <SSRProduct id={params.id} />
    </Wrapper>
  );
};

export default Product;
