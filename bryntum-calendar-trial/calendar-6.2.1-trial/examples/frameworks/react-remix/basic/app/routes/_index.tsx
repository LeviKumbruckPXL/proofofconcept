import BryntumClient from '~/components/bryntum.client';
import '../styles/index.scss';

export const links = () => [
    { rel : 'icon', href : '/favicon.png', type : 'image/png' },
    // Bryntum component theme
    {
        rel                  : 'stylesheet',
        href                 : 'themes/calendar.stockholm.css',
        'data-bryntum-theme' : true
    }
];

export default function Index() {
    return (
        <>
            <BryntumClient />
        </>
    );
}
