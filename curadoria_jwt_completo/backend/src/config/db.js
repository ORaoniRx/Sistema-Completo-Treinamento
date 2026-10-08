const { Pool } = require("pg");
const pool = new Pool({
    host: 'aws-0-ca-central-1.pooler.supabase.com',
    user: 'postgres.bgnmykkqkcjnanqsulqf',
    password: 'rTFrPVXOM08cvcDD',
    database: 'postgres',
    port:6543
  });
  
  module.exports = pool;