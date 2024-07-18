/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

module.exports = [
  {
    shortName: 'dom-node',
    entryPoints: [
      'react-dom',
      'react-dom/client',
    ],
    paths: [
      'react-dom',
      'react-dom/client',
    ],
    isFlowTyped: true,
    isServerSupported: true,
  }
];
