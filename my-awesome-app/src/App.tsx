import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import { useTranslation } from 'react-i18next'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()
  const [count, setCount] = useState(0)
  const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight })
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)

    // 5秒后自动停止彩带动画
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 5000)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
    }
  }, [])

  const toggleConfetti = () => {
    setShowConfetti(!showConfetti)
  }

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(newLanguage)
  }

  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          numberOfPieces={200}
          recycle={false}
          gravity={0.1}
        />
      )}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>{t('welcome.title')}</h1>

      {/* 语言切换按钮 */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={toggleLanguage}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {i18n.language === 'zh' ? '🇺🇸 English' : '🇨🇳 中文'}
        </button>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={toggleConfetti} style={{ marginLeft: '10px' }}>
          {showConfetti ? '🛑 停止彩带' : '🎊 开始庆祝'}
        </button>

        <p>
          {t('welcome.message')}
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
        <p>🎊 <strong>彩带功能说明：</strong></p>
        <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          <li>页面加载时自动播放5秒彩带动画</li>
          <li>点击"开始庆祝"按钮可手动控制彩带</li>
          <li>使用 react-confetti 库实现</li>
          <li>自动适应窗口大小</li>
        </ul>
      </div>
    </>
  )
}

export default App
