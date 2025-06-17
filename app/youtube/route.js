import RSSParser from 'rss-parser';

const parser = new RSSParser();
const CHANNEL_ID = 'UCLRt4vIHXpvpy7NI7cGNSfQ'; // Zameniti ako treba

export async function GET() {
  try {
    const feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`);

    const videos = feed.items.map(item => {
      const url = new URL(item.link);
      const videoId = url.searchParams.get('v');

      return {
        title: item.title,
        videoId,
        pubDate: item.pubDate,
      };
    });

    return Response.json(videos);
  } catch (error) {
    console.error("Greška pri učitavanju RSS feed-a:", error);
    return new Response(JSON.stringify({ error: 'Greška pri učитавању видеа' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
