import { AppContent, AppHeader, AppSidebar } from '../components/index'

const DefaultLayout = () => {
    return <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column">
            <AppHeader />
            <div className="body flex-grow-1">
                <AppContent />
            </div>
        </div>
    </div>
}

export default DefaultLayout