import { useState, useEffect } from 'react';
import { supabase } from './supabase';
import { caseStudies as staticCaseStudies, mappedInsights as staticMappedInsights } from '../data/siteData';

/* ─────────────────────────────────────────────────────────────────────────
   useCaseStudies
   Returns the full list of case studies.
   – Renders immediately with static data (no loading flash).
   – Silently replaces with Supabase data once it arrives.
   – Falls back to static data if Supabase is unconfigured or errors.
───────────────────────────────────────────────────────────────────────── */
export function useCaseStudies() {
  const [data, setData]       = useState(staticCaseStudies);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  useEffect(() => {
    if (!supabase) return; // no env vars — stay on static data

    setLoading(true);
    supabase
      .from('case_studies')
      .select('*')
      .order('display_order', { ascending: true })
      .then(({ data: rows, error: err }) => {
        if (err) {
          console.warn('[Supabase] case_studies:', err.message);
          setError(err.message);
        } else if (rows && rows.length > 0) {
          // Normalise Supabase column names → same shape as siteData
          setData(rows.map(normaliseCaseStudy));
        }
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

/* ─────────────────────────────────────────────────────────────────────────
   useMappedInsights
   Same pattern for the Mapped spatial intelligence posts.
───────────────────────────────────────────────────────────────────────── */
export function useMappedInsights() {
  const [data, setData]       = useState(staticMappedInsights);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  useEffect(() => {
    if (!supabase) return;

    setLoading(true);
    supabase
      .from('mapped_insights')
      .select('*')
      .order('display_order', { ascending: true })
      .then(({ data: rows, error: err }) => {
        if (err) {
          console.warn('[Supabase] mapped_insights:', err.message);
          setError(err.message);
        } else if (rows && rows.length > 0) {
          setData(rows.map(normaliseMappedInsight));
        }
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

/* ─────────────────────────────────────────────────────────────────────────
   Normalisers
   Map Supabase snake_case columns back to the camelCase shape the
   components already expect, so no component code needs to change.
───────────────────────────────────────────────────────────────────────── */
function normaliseCaseStudy(row) {
  return {
    id:          row.id,
    category:    row.category,
    client:      row.client,
    year:        row.year,
    duration:    row.duration,
    location:    row.location,
    title:       row.title,
    excerpt:     row.excerpt,
    fullContent: row.full_content  ?? null,
    challenge:   row.challenge     ?? '',
    approach:    row.approach      ?? '',
    findings:    row.findings      ?? [],
    impact:      row.impact        ?? '',
    tags:        row.tags          ?? [],
    image:       row.image         ?? '',
    externalLink:row.external_link ?? null,
  };
}

function normaliseMappedInsight(row) {
  return {
    id:          row.id,
    title:       row.title,
    date:        row.date,
    region:      row.region,
    mapImage:    row.map_image  ?? '',
    mapEmbed:    row.map_embed  ?? '',
    summary:     row.summary,
    insights:    row.insights   ?? [],
    implications:row.implications ?? '',
  };
}
