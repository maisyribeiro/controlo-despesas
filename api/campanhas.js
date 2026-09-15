export default async function handler(req, res) {
  try {
    const response = await fetch('https://dashboardmetaads-wheat.vercel.app/dashboard/campanhas', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      }
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: 'Falha ao carregar dados',
      message: error.message
    });
  }
}
