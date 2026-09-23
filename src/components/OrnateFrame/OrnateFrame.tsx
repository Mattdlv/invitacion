import type { ReactNode } from 'react';
import './OrnateFrame.css';

const corners = ['tl', 'tr', 'br', 'bl'] as const;

export default function OrnateFrame({ children }: { children: ReactNode }) {
  return (
    <div className="ornate-frame">
      <div className="ornate-frame__lines" aria-hidden="true" />
      {corners.map((c) => (
        <img key={c} className={`ornate-frame__corner ornate-frame__corner--${c}`} src="/svg/frame-corner.svg" alt="" />
      ))}
      <img className="ornate-frame__center ornate-frame__center--top" src="/svg/frame-center.svg" alt="" />
      <img className="ornate-frame__center ornate-frame__center--bottom" src="/svg/frame-center.svg" alt="" />
      <img className="ornate-frame__side ornate-frame__side--left" src="/svg/frame-side.svg" alt="" />
      <img className="ornate-frame__side ornate-frame__side--right" src="/svg/frame-side.svg" alt="" />
      <div className="ornate-frame__content">{children}</div>
    </div>
  );
}
