$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$assetsDir = Join-Path $root 'assets'
New-Item -ItemType Directory -Force -Path $assetsDir | Out-Null

function New-Raccoon {
    param([string]$Path)

    $width = 1200
    $height = 1200
    $bmp = New-Object System.Drawing.Bitmap -ArgumentList $width, $height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear([System.Drawing.Color]::FromArgb(0, 0, 0, 0))

    $cream = [System.Drawing.Color]::FromArgb(255, 243, 229, 202)
    $mask = [System.Drawing.Color]::FromArgb(255, 66, 49, 43)
    $white = [System.Drawing.Color]::FromArgb(255, 255, 255, 255)
    $black = [System.Drawing.Color]::FromArgb(255, 18, 18, 18)
    $warm = [System.Drawing.Color]::FromArgb(255, 220, 160, 110)
    $shadow = [System.Drawing.Color]::FromArgb(60, 0, 0, 0)
    $cheek = [System.Drawing.Color]::FromArgb(140, 214, 146, 105)
    $belly = [System.Drawing.Color]::FromArgb(220, 248, 244, 239)

    $tailBrush = New-Object System.Drawing.SolidBrush($cream)
    $headBrush = New-Object System.Drawing.SolidBrush($cream)
    $maskBrush = New-Object System.Drawing.SolidBrush($mask)
    $whiteBrush = New-Object System.Drawing.SolidBrush($white)
    $blackBrush = New-Object System.Drawing.SolidBrush($black)
    $warmBrush = New-Object System.Drawing.SolidBrush($warm)
    $shadowBrush = New-Object System.Drawing.SolidBrush($shadow)
    $cheekBrush = New-Object System.Drawing.SolidBrush($cheek)
    $bellyBrush = New-Object System.Drawing.SolidBrush($belly)

    $g.FillEllipse($tailBrush, 320, 700, 520, 420)
    $g.FillEllipse($headBrush, 260, 110, 700, 620)
    $g.FillEllipse($headBrush, 310, 60, 180, 220)
    $g.FillEllipse($headBrush, 710, 60, 180, 220)
    $g.FillEllipse($maskBrush, 360, 95, 150, 145)
    $g.FillEllipse($maskBrush, 690, 95, 150, 145)
    $g.FillEllipse($maskBrush, 200, 160, 800, 520)
    $g.FillEllipse($headBrush, 420, 400, 350, 210)
    $g.FillEllipse($whiteBrush, 400, 305, 100, 95)
    $g.FillEllipse($whiteBrush, 700, 305, 100, 95)
    $g.FillEllipse($blackBrush, 430, 340, 42, 44)
    $g.FillEllipse($blackBrush, 735, 340, 42, 44)
    $g.FillEllipse($warmBrush, 530, 420, 130, 98)
    $g.FillEllipse($cheekBrush, 340, 470, 90, 60)
    $g.FillEllipse($cheekBrush, 770, 470, 90, 60)
    $g.FillEllipse($headBrush, 340, 560, 520, 380)
    $g.FillEllipse($bellyBrush, 430, 700, 340, 190)
    $g.FillEllipse($headBrush, 370, 760, 140, 160)
    $g.FillEllipse($headBrush, 690, 760, 140, 160)
    $g.FillEllipse($headBrush, 500, 830, 180, 130)
    $g.FillEllipse($shadowBrush, 290, 210, 180, 180)
    $g.FillEllipse($shadowBrush, 730, 210, 180, 180)

    $g.Dispose()
    $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

function New-Cake {
    param([string]$Path)

    $width = 1200
    $height = 1200
    $bmp = New-Object System.Drawing.Bitmap -ArgumentList $width, $height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear([System.Drawing.Color]::FromArgb(0, 0, 0, 0))

    $plate = [System.Drawing.Color]::FromArgb(255, 180, 155, 118)
    $plateLight = [System.Drawing.Color]::FromArgb(255, 230, 203, 162)
    $cream = [System.Drawing.Color]::FromArgb(255, 255, 248, 240)
    $choco = [System.Drawing.Color]::FromArgb(255, 126, 81, 54)
    $berry = [System.Drawing.Color]::FromArgb(255, 153, 31, 72)
    $gold = [System.Drawing.Color]::FromArgb(255, 234, 174, 90)
    $shadow = [System.Drawing.Color]::FromArgb(80, 0, 0, 0)
    $layer1 = [System.Drawing.Color]::FromArgb(255, 236, 196, 152)
    $layer2 = [System.Drawing.Color]::FromArgb(255, 223, 180, 130)
    $layer3 = [System.Drawing.Color]::FromArgb(255, 248, 231, 210)
    $candle = [System.Drawing.Color]::FromArgb(255, 244, 214, 110)

    $plateBrush = New-Object System.Drawing.SolidBrush($plate)
    $plateLightBrush = New-Object System.Drawing.SolidBrush($plateLight)
    $creamBrush = New-Object System.Drawing.SolidBrush($cream)
    $chocoBrush = New-Object System.Drawing.SolidBrush($choco)
    $berryBrush = New-Object System.Drawing.SolidBrush($berry)
    $goldBrush = New-Object System.Drawing.SolidBrush($gold)
    $shadowBrush = New-Object System.Drawing.SolidBrush($shadow)
    $layer1Brush = New-Object System.Drawing.SolidBrush($layer1)
    $layer2Brush = New-Object System.Drawing.SolidBrush($layer2)
    $layer3Brush = New-Object System.Drawing.SolidBrush($layer3)
    $candleBrush = New-Object System.Drawing.SolidBrush($candle)

    $g.FillEllipse($plateBrush, 150, 760, 900, 260)
    $g.FillEllipse($plateLightBrush, 220, 810, 760, 170)
    $g.FillEllipse($layer1Brush, 260, 590, 680, 220)
    $g.FillEllipse($layer2Brush, 270, 500, 660, 210)
    $g.FillEllipse($layer3Brush, 290, 420, 620, 190)
    $g.FillEllipse($creamBrush, 300, 330, 600, 180)
    foreach ($x in 330, 430, 530, 630, 730, 830) {
        $g.FillEllipse($creamBrush, $x, 300, 60, 80)
    }
    $g.FillEllipse($chocoBrush, 260, 525, 680, 180)
    foreach ($x in 360, 500, 640, 780) {
        $g.FillEllipse($creamBrush, $x, 470, 80, 120)
    }
    foreach ($point in @(
        @([int]370, [int]420), @([int]530, [int]390), @([int]700, [int]430), @([int]820, [int]360)
    )) {
        $g.FillEllipse($berryBrush, $point[0], $point[1], 60, 60)
    }
    foreach ($x in 430, 570, 710) {
        $g.FillRectangle($goldBrush, $x, 200, 26, 120)
        $g.FillEllipse($candleBrush, $x - 18, 152, 62, 60)
    }
    $g.FillEllipse($shadowBrush, 260, 820, 680, 120)

    $g.Dispose()
    $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

New-Raccoon (Join-Path $assetsDir 'raccoon.png')
New-Cake (Join-Path $assetsDir 'chocolate-cake.png')
Get-ChildItem $assetsDir | Select-Object FullName, Length | Format-Table -AutoSize
