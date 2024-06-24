import { Layout } from "./LayoutStyles"


function LayoutWrapper({children}) {
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default LayoutWrapper;