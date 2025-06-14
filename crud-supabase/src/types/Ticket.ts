export interface Ticket {
    id: string;
    table_number?: string; 
    party_size: number;
    status: string; 
    estimated_wait_time: string;
    position_in_queue?: number;
    created_at: string;
}