import { Routes, Route } from 'react-router-dom'
import { SidebarTrigger } from "./components/ui/sidebar"

import Dashboard from './pages/Dashboard'
import JournalingCalendar from './pages/JournalingCalendar'
import TradeHistory from './pages/TradeHistory'
import ReportsPage from './pages/ReportsPage'
import StrategiesPage from './pages/StrategiesPage'
import TradingSimulator from './pages/TradingSimulator'
import EducationSection from './pages/EducationSection'
import SupportCenter from './pages/SupportCenter'
// import BreadcumbMenu from './components/BreadcumbMenu'

const App = () => {
  
  return (
    <div className='w-full min-h-screen flex bg-background text-foreground'>
   
      <main className="flex-1 flex flex-col">
       
        <header className="bg-background z-50 fixed top-0 w-full p-2 border-b border-border flex items-center gap-4">
          <SidebarTrigger />
          {/* <BreadcumbMenu /> */}
        </header>
        
        {/* Page content */}
        <div className="flex-1 p-4 pt-14">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/journaling-calendar" element={<JournalingCalendar />} />
            <Route path="/trade-history" element={<TradeHistory />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/strategies" element={<StrategiesPage />} />
            <Route path="/trading-simulator" element={<TradingSimulator />} />
            <Route path="/education" element={<EducationSection />} />
            <Route path="/support" element={<SupportCenter />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App


