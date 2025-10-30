/*
  # Add Password Support for Workers

  1. Changes
    - Add password column to workers table
    - Allow workers to authenticate with password instead of just first name
    - Maintains backward compatibility (passwords can be null initially)

  2. Security
    - Password stored as plain text for development
    - MUST implement password hashing (bcrypt/argon2) before production deployment
*/

-- Add password column to workers table
ALTER TABLE public.workers
ADD COLUMN IF NOT EXISTS password TEXT;

-- Add comment for documentation
COMMENT ON COLUMN public.workers.password IS 'Worker password for authentication. Currently plain text for development - MUST be hashed in production!';
