import { ReactElement, ReactNode } from 'react';

function MainLayout({children}: { children: ReactNode}): ReactElement {
    return (
        <div>
            { children }
        </div>
    )
}

export default MainLayout;