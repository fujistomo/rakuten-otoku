import campaignsData from "../data/campaigns.json";

type Campaign = {
  id: string;
  title: string;
  status: string;
  start: string | null;
  end: string | null;
  entryStart?: string | null;
  entryEnd?: string | null;
  summary: string;
  officialUrl: string;
  tags: string[];
  priority: number;
};

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function statusLabel(status: string): string {
  switch (status) {
    case "ongoing":
      return "開催中";
    case "upcoming":
      return "開催予定";
    case "ended":
      return "終了";
    case "recurring":
      return "定期";
    default:
      return status;
  }
}

export default function Home() {
  const campaigns = (campaignsData.campaigns as Campaign[]).sort(
    (a, b) => a.priority - b.priority
  );
  const updatedAt = formatDate(campaignsData.updatedAt);

  return (
    <>
      <h1 className="page-title">開催中・予定のキャンペーン</h1>
      <p className="updated">最終更新: {updatedAt}（JST）</p>

      <div className="note">
        情報は楽天公式ページを基に整理しています。アフィリエイトリンクは一切ありません。
        エントリー・条件・ポイント上限は必ず公式ページでご確認ください。
      </div>

      <div className="grid">
        {campaigns.map((c) => (
          <article key={c.id} className="card">
            <div className="card-header">
              <h2 className="card-title">{c.title}</h2>
              <span className={`badge ${c.status}`}>
                {statusLabel(c.status)}
              </span>
            </div>
            <p className="summary">{c.summary}</p>
            <div className="meta">
              {c.start && (
                <div>
                  期間: {formatDate(c.start)} 〜 {formatDate(c.end)}
                </div>
              )}
              {c.entryStart && (
                <div>
                  エントリー: {formatDate(c.entryStart)} 〜{" "}
                  {formatDate(c.entryEnd ?? null)}
                </div>
              )}
            </div>
            <div className="tags">
              {c.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <a
              className="btn"
              href={c.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              公式ページを見る
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
