import fs from 'fs';
import path from 'path';
function GenerateData() {
    type Post = {
        id: number;
        nickname: string;
        date_posted: string;
        category: string;
        title: string;
        likes_count: number;
        comments_count: number;
    };
    const categories = [
        "Technology", "Health", "Programming", "Cuisine", "Travel", "Environment", "Fitness", "Art"
    ];
    const GenerateRandomData = (id: number): Post => {
        return {
            id,
            nickname: `user_${id}`,
            date_posted: `2023-07-${30 - (id % 30)}`,
            category: categories[id % categories.length],
            title: `title_${id}`,
            likes_count: Math.random() * 100,
            comments_count: Math.random() * 500
        }
    }
    const Posts : Post[] = Array.from({length:100}, (_, i) => GenerateRandomData(i+1));
    fs.writeFile(`./Data.json`, JSON.stringify({Posts}), (err)=>{if(err) throw err});
}
export {}