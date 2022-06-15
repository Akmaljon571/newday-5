import Header from "../header/header"
import Main from "../main/main"
import { Container } from "../container/container"
import './layout.scss'
import { Render } from "../render/render"

const MainLayout = ({ children }) => {
    return (
        <>
            <Container>
                <Header />
                <Main />
                <Render>{children}</Render>
            </Container>
        </>
    )
}

export default MainLayout
