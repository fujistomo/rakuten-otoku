# 楽天お得情報まとめ

楽天市場・楽天グループの**公式キャンペーン・セール情報**を整理したサイトです。

- **アフィリエイトリンクなし**（公式ページへの直接リンクのみ）
- まずはアクセス数検証用
- データは `data/campaigns.json` で管理 → 更新して再デプロイすれば反映

## 技術

- Next.js (App Router) + 静的エクスポート (`output: "export"`)
- Vercel で簡単デプロイ可能

## ローカル起動

```bash
npm install
npm run dev
```

## 更新方法

1. `data/campaigns.json` を編集（公式ページの情報に合わせて）
2. commit & push
3. Vercel が自動デプロイ（Git 連携済みの場合）

## 公式参照先（例）

- https://event.rakuten.co.jp/
- https://event.rakuten.co.jp/campaign/point-up/marathon/
- https://network.mobile.rakuten.co.jp/campaign/

## 注意

本サイトは個人による情報整理であり、楽天グループ公式ではありません。  
キャンペーン条件・エントリー・ポイント付与は必ず公式ページでご確認ください。
