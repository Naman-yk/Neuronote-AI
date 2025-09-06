'use server';

import { getDbConnection } from "@/lib/db";

export async function deleteSummary({summaryId}: {
    summaryId: string
}){
    try{
        const sql = await getDbConnection();

        const result = await sql`
        DELETE FROM pdf_summaries
        WHERE id = ${summaryId} AND user_id  = ''
        RETURNING id;`;

    }catch(error){
        
    }
}
