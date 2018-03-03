import * as React from 'react';

import * as style from './Page.scss';

export interface PageProps {
    children?: React.ReactNode; //JSX.Element | JSX.Element [] | string;
}

export const Page = ({
    children
}: PageProps): JSX.Element => (
    <div className={style.root}>
        <div className={style.content}>
            {children}
        </div>
    </div>
);