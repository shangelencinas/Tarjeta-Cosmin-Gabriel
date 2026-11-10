import { ContactInfo } from '../types';

export const contactData: ContactInfo = {
  name: 'Juan Gabriel Flores Quijada',
  firstName: 'Juan Gabriel',
  lastName: 'Flores Quijada',
  role: 'Administrador',
  company: 'COSMIN · Consultoría y Servicios Mineros & COSLINK',
  tagline: 'Administración y gestión de servicios de consultoría técnica y jurídica para la minería en México e impulso estratégico de proyectos en COSLINK.',
  phone: '+526623180293',
  phoneFormatted: '+52 (662) 318-0293',
  email: 'Jgabrielf23@gmail.com',
  location: 'Hermosillo, Sonora, México',
  websiteCosmin: 'https://www.cosmin.com.mx/',
  websiteCoslink: 'https://www.coslink.global',
  socialCosmin: {
    handle: '@cosminmx',
    instagram: 'https://www.instagram.com/cosminmx',
    linkedin: 'https://www.linkedin.com/company/cosminmx',
    facebook: 'https://www.facebook.com/cosminmx',
    x: 'https://twitter.com/cosminmx',
  },
  socialCoslink: {
    handle: '@coslink.global',
    instagram: 'https://www.instagram.com/coslink.global',
    linkedin: 'https://www.linkedin.com/company/coslink-global',
    website: 'https://www.coslink.global',
  },
  photoUrl: 'assets/aistudio/image_d15c0c47.png',
  cosminLogoTransparent: 'assets/aistudio/cosmin_logo_transparent.png',
  cosminLogoWhiteText: 'assets/aistudio/cosmin_logo_white_text.png',
  coslinkLogoTransparent: 'assets/aistudio/coslink_logo_transparent.png',
  coslinkLogoWhite: 'assets/aistudio/coslink_logo_white_transparent.png',
};

export const cosminServices = [
  {
    title: 'Gestión y Certeza en Concesiones',
    description: 'Trámites, regularización, dictámenes de libertad de terreno y defensa de derechos de concesiones mineras ante la DGM.',
  },
  {
    title: 'Consultoría Geológica y Exploración',
    description: 'Cartografía geológica, muestreo geoquímico, evaluación de potencial de yacimientos metálicos y no metálicos.',
  },
  {
    title: 'Cumplimiento Ambiental y Normativo',
    description: 'Estudios de impacto ambiental (MIA), autorizaciones de cambio de uso de suelo (ETJ) y enlace comunitario.',
  },
  {
    title: 'Estrategia y Valuación de Proyectos',
    description: 'Due diligence técnico-legal para adquisición de activos mineros y formulación de planes de desarrollo.',
  },
];

export const coslinkPillars = [
  {
    target: 'Concesionarios',
    benefit: 'Publica concesiones activas y atrae capital nacional e internacional con total confidencialidad y rigor.',
  },
  {
    target: 'Inversionistas',
    benefit: 'Encuentra prospectos mineros auditados técnicamente, filtrados por etapa geológica, mineral y ubicación.',
  },
  {
    target: 'Proveedores de Servicios',
    benefit: 'Conecta con mineras en etapa de exploración o explotación para ofrecer barrenación, laboratorio y equipos.',
  },
  {
    target: 'Especialistas y Consultores',
    benefit: 'Colabora en proyectos multidisciplinarios de geología, geofísica, topografía y metalurgia.',
  },
];
