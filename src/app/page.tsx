'use client';

import { Container } from '@/components/Container';
import { Posts } from '@/components/Posts/Posts';

export default function HomePage() {
  return (
    <div className="bg-grayBg min-h-full">
      <Container>
        <Posts />
      </Container>
    </div>
  );
}
