// DEPRECATED: This file is a temporary stub for backwards compatibility
// All localStorage functionality should be migrated to Supabase services in database.service.ts
// TODO: Remove this file once all imports have been migrated

console.warn('localStorage.ts is deprecated. Please migrate to Supabase services.');

export const STORAGE_KEYS = {
  BOOKINGS: 'bookings',
  CONSOLE_WORKERS: 'console_workers',
  CONSOLE_CARTS: 'console_carts',
  TERRITORY_ASSIGNMENTS: 'territory_assignments',
  EAST_TERRITORY_STRUCTURE: 'east_territory_structure',
  BOOKINGS_WEST_AERATION: 'bookings_west_aeration',
  BOOKINGS_WEST_SPRING_REJUV: 'bookings_west_spring_rejuv',
  BOOKINGS_WEST_FALL_REJUV: 'bookings_west_fall_rejuv',
  BOOKINGS_WEST_SERVICE: 'bookings_west_service',
  BOOKINGS_CENTRAL_AERATION: 'bookings_central_aeration',
  BOOKINGS_CENTRAL_CLEANING: 'bookings_central_cleaning',
  BOOKINGS_EAST_AERATION: 'bookings_east_aeration',
  BOOKINGS_EAST_SEALING: 'bookings_east_sealing',
  CONSOLE_PROFILES: 'console_profiles',
  ROUTE_MANAGER_PROFILES: 'route_manager_profiles',
  SERVICES: 'services',
  UPSELL_MENUS: 'upsell_menus',
  CONTRACTOR: 'contractor',
  ACTIVE_CART: 'active_cart',
  ROUTE_MANAGER: 'routeManager',
  ADMIN: 'admin',
  BUSINESS_USER: 'business_user',
  ACTIVE_SEASON_ID: 'active_season_id',
  ROUTE_ASSIGNMENTS: 'routeAssignments',
  MAP_ASSIGNMENTS: 'mapAssignments',
  ATTENDANCE_FINALIZED: 'attendanceFinalized',
  LAST_APP_DATE: 'lastAppDate',
} as const;

export const getStorageItem = <T>(key: string, defaultValue: T): T => {
  console.warn(`getStorageItem('${key}') called - should use Supabase service instead`);
  if (typeof localStorage === 'undefined') {
    return defaultValue;
  }
  const savedItem = localStorage.getItem(key);
  try {
    if (savedItem === 'undefined' || savedItem === 'null' || savedItem === null) {
      return defaultValue;
    }
    return JSON.parse(savedItem);
  } catch (e) {
    console.error(`Error parsing localStorage item "${key}":`, e);
    return defaultValue;
  }
};

export const setStorageItem = <T>(key: string, value: T): void => {
  console.warn(`setStorageItem('${key}') called - should use Supabase service instead`);
  if (typeof localStorage === 'undefined') {
    return;
  }
  try {
    if (value === undefined) {
      localStorage.removeItem(key);
      return;
    }
    const valueToStore = JSON.stringify(value);
    localStorage.setItem(key, valueToStore);
    window.dispatchEvent(new CustomEvent('storageUpdated', { detail: { key, value } }));
  } catch (e) {
    console.error(`Error saving localStorage item "${key}":`, e);
  }
};

export const removeStorageItem = (key: string): void => {
  console.warn(`removeStorageItem('${key}') called - should use Supabase service instead`);
  if (typeof localStorage === 'undefined') {
    return;
  }
  try {
    localStorage.removeItem(key);
    window.dispatchEvent(new CustomEvent('storageUpdated', { detail: { key, value: null } }));
  } catch (e) {
    console.error(`Error removing localStorage item "${key}":`, e);
  }
};

// Re-export for backwards compatibility
export { getSeasonConfigById } from './hardcodedData';
