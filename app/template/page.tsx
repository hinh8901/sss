import { Button } from '@/components/ui/button';
import React from 'react';

const ThemeControlPage: React.FC = () => {
    return (
        <div className="theme-control-page">
            <h1>Theme Control</h1>
            <div className="theme-buttons">
                <Button variant={'default'} >default</Button>
                <Button variant={'destructive'} >destructive</Button>
                <Button variant={'ghost'} >ghost</Button>
                <Button variant={'link'} >link</Button>
                <Button variant={'outline'} >outline</Button>
                <Button variant={'secondary'} >secondary</Button>
            </div>
        </div>
    );
};

export default ThemeControlPage;