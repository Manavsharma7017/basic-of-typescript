
type event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<event, 'scroll'>;
const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
  };
  
  handleEvent('click');
//   handleEvent('scroll');//error