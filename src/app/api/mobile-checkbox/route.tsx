export async function GET() {
  try {
    const data = [
      {
        id: 0,
        title: '한국어 능력',
      },
      {
        id: 1,
        title: '업무 수행 능력',
      },
      {
        id: 2,
        title: '겸업 여부',
      },
      {
        id: 2,
        title: '평판 조회',
      },
    ];

    return Response.json({ status: 200, message: 'Success', data });
  } catch (error) {
    console.log('errror', error);
  }
}
