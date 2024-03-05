const headidng = React.createElement('h1',{id:'heading'},'Hello world from react');
const str =  React.createElement('div',{id:'parent1'}, 
    React.createElement('div',{id:'parent2'}, [
        React.createElement('h1',{},'i am a heading1 in side structure'),
        React.createElement('h2',{},'i am a heading2 in side structure sibling')
    ])
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(str)
// root.render(headidng);
console.log(headidng);
