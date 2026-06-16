@echo off
rem コードページをUTF-8に設定
chcp 65001 > nul

echo ===================================================
echo ミギナシステム 起動
echo ===================================================

echo.
echo [STEP 1/2] 🔗 GitHubへの接続先を最新化中...
echo ---------------------------------------------------
git remote set-url origin https://github.com/mgn-migina/barometer.git
if %errorlevel% neq 0 (
    git remote add origin https://github.com/mgn-migina/barometer.git
)

echo.
echo [STEP 2/2] 🚀 更新されたページをGitHubへプッシュ中...
echo ---------------------------------------------------
git add .
git commit -m "バッチファイルによるサイト自動更新"
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo ❌ GitHubへのアップロードに失敗しました。
    pause
    exit /b
)

echo.
echo ===================================================
echo ✨ すべての処理が正常に完了しました！
echo Cloudflare Pages側のサイトが自動更新されます。
echo ===================================================
timeout /t 30