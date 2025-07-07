const currentYear = new Date().getFullYear();

const templates = {
  mit: (author) => `/*
MIT License

Copyright (c) ${currentYear} ${author}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software...
*/`,
  apache: (author) => `/*
Apache License 2.0

Copyright ${currentYear} ${author}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License...
*/`
};

module.exports = templates;
