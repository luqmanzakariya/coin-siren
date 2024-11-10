export async function GET() {
  try {
    const data = [
      {
        id: 0,
        title: '해외 마케팅',
      },
      {
        id: 1,
        title: '퍼블리셔',
      },
      {
        id: 2,
        title: '캐드원(제도사)',
      },
      {
        id: 3,
        title: '해외 세일즈',
      },
      {
        id: 4,
        title: '해외 CS',
      },
    ];

    return Response.json({ status: 200, message: 'Success', data });
  } catch (error) {
    console.log('errror', error);
  }
}
