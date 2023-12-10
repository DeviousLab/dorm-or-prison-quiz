/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
export const runtime = 'edge';

export async function GET(request: Request) {
  const image = await fetch(new URL('../Designer.png', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );
  try {
    const { searchParams } = new URL(request.url);

    const hasScore = searchParams.has('accuracy');
    const accuracy = hasScore
      ? searchParams.get('accuracy')
      : '0';

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#e0f2fe',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <img
              alt="DormIQ Logo"
              height={200}
              //@ts-ignore
              src={image}
              style={{ margin: '0 30px' }}
              width={200}
            />
          </div>
          <div
            style={{
              fontSize: 55,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color: '#1f2937',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
              display: 'flex',
            }}
          >
            I got an accuracy of {accuracy}% in DormIQ!
            Can you do any better? 🕵️
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}