import * as React from 'react';

import * as style from './Page.css';

export interface PageProps {
    children?: React.ReactNode; //JSX.Element | JSX.Element [] | string;
    pageLabel?: string;
    previousUrl?: string;
    previousLabel?: string;
}

export const Page = (
    {
        children
    }: PageProps
): JSX.Element => (
    <div className={style.root}>
        <div className={style.content}>
            {children}
        </div>
    </div>
);