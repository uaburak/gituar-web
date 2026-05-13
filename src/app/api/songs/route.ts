import { NextResponse } from 'next/server';
import songs from '@/data/chords_data.json';

export async function GET() {
  return NextResponse.json(songs);
}
