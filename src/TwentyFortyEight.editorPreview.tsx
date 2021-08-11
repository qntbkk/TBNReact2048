import { Component, ReactNode, createElement } from "react";
import App from './App/App';
import GlobalStyle from './components/GlobalStyle';

export class preview extends Component {
    render(): ReactNode {
        return (
            <div>
                <GlobalStyle />
                <App />
            </div>
        )
    }
}