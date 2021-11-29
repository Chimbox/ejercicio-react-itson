import React from "react";

export default function PostData({posts}){
    const cols=posts[0]&&Object.keys(posts[0]);
    return <div>
        <table>
            <thead>
                <tr>
                    {posts[0]&&cols.map(heading=><th>{heading}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((row)=>(
                        <tr>
                            {
                                cols.map((col)=>(
                                    <td>{row[col]}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>;
}