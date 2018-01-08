--		alter system set processes=500 scope=spfile/;
SET DATABASE SQL SYNTAX ORA TRUE ;

--		alter system set deferred_segment_creation = false/;
--		drop tablespace ${tablespace} including contents and datafiles/;
DROP SCHEMA public CASCADE ;

--		create tablespace ${tablespace} datafile '${oracle_data_dir}/${tablespace}${idx}.dbf' size ${size}/;
--		alter tablespace ${tablespace} add datafile '${oracle_data_dir}/${tablespace}${idx}.dbf' size ${size}/;

--		drop user ${username} cascade/;
DROP USER ${username};

--		create user ${username} identified by ${password} default tablespace ${tablespace}/;
CREATE USER ${username} PASSWORD '${password}' ADMIN ;
