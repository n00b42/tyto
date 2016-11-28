-- TABLES --

CREATE TABLE `boards` (
  `id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(1000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `columns` (
  `id` bigint(20) NOT NULL,
  `boardId` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `ordinal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `tasks` (
  `id` bigint(20) NOT NULL,
  `boardId` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `columnId` bigint(20) NOT NULL,
  `title` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `ordinal` int(11) NOT NULL,
  `color` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `timeSpent` varchar(1000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- INDICES --

ALTER TABLE `boards`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `columns`
  ADD PRIMARY KEY (`boardId`,`id`), ADD KEY `boardId` (`boardId`);

ALTER TABLE `tasks`
  ADD PRIMARY KEY (`boardId`,`id`), ADD KEY `boardId` (`boardId`), ADD KEY `columnId` (`columnId`), ADD KEY `boardId_2` (`boardId`,`columnId`);

-- CONSTRAINTS --

ALTER TABLE `columns`
ADD CONSTRAINT `columns_ibfk_1` FOREIGN KEY (`boardId`) REFERENCES `boards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;


ALTER TABLE `tasks`
ADD CONSTRAINT `tasks_ibfk_2` FOREIGN KEY (`boardId`, `columnId`) REFERENCES `columns` (`boardId`, `id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`boardId`) REFERENCES `boards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

