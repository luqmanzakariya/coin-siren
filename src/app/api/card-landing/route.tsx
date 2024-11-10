export async function GET() {
  try {
    const data = [
      {
        key: 0,
        title: '평균 월 120만원',
        description: '임금을 해당 국가를 기준으로 계산합니다.',
      },
      {
        key: 1,
        title: '최대 3회 인력교체',
        description: '막상 채용해보니 맞지 않아도 걱정하지 마세요. ',
      },
      {
        key: 2,
        title: '평균 3일, 최대 10일',
        description: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
      },
    ];

    return Response.json({ status: 200, message: 'Success', data });
  } catch (error) {
    console.log('errror', error);
  }
}
