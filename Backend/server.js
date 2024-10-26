import app from './index.js';

app.listen(process.env.PORT, () => {
    console.log(`Server Started ${process.env.PORT}`);
    
})