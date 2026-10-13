import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "楽天お得情報まとめ | 公式キャンペーン整理",
  description:
    "楽天市場・楽天グループの公式キャンペーン・セール情報をまとめ。アフィリエイトなし。公式ページへのリンクのみ。",
  openGraph: {
    title: "楽天お得情報まとめ",
    description: "公式ソースベースのお得情報まとめサイト",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <div className="container">
            <a href="/" className="logo">
              楽天お得情報まとめ
            </a>
            <p className="tagline">公式ソースベース・アフィリエイトなし</p>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>
              本サイトは楽天公式ページの情報を整理した個人まとめです。アフィリエイトリンクは使用していません。
              最新情報・条件・エントリーは必ず公式ページでご確認ください。
            </p>
            <p className="sources">
              主な参照:{" "}
              <a
                href="https://event.rakuten.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                event.rakuten.co.jp
              </a>
              {" · "}
              <a
                href="https://network.mobile.rakuten.co.jp/campaign/"
                target="_blank"
                rel="noopener noreferrer"
              >
                楽天モバイルキャンペーン
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
