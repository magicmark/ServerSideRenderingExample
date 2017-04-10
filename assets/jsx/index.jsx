import { renderReact } from 'hypernova-react';
import Sheep from './sheep';

// All instances of 'Sheep' on the page will be hydrated by Hypernova with this
renderReact('Sheep', Sheep);
